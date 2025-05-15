
import sum1965 from '../sum1965.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 58 to equal 97 + offset 0.8277580891232493', (t) => {
  assert.strictEqual(sum1965(39, 58), 97 + 0.8277580891232493);
});
