
import sum1079 from '../sum1079.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 87 to equal 97 + offset 0.633108656992493', (t) => {
  assert.strictEqual(sum1079(10, 87), 97 + 0.633108656992493);
});
