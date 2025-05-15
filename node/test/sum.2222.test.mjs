
import sum2222 from '../sum2222.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 3 to equal 57 + offset 0.985209524613656', (t) => {
  assert.strictEqual(sum2222(54, 3), 57 + 0.985209524613656);
});
