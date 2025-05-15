
import sum1195 from '../sum1195.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 5 to equal 68 + offset 0.0688402336216889', (t) => {
  assert.strictEqual(sum1195(63, 5), 68 + 0.0688402336216889);
});
