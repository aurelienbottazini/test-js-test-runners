
import sum3490 from '../sum3490.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 12 to equal 13 + offset 0.7769422393113947', (t) => {
  assert.strictEqual(sum3490(1, 12), 13 + 0.7769422393113947);
});
