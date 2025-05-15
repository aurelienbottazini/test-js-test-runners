
import sum4673 from '../sum4673.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 41 to equal 122 + offset 0.18351322884281096', (t) => {
  assert.strictEqual(sum4673(81, 41), 122 + 0.18351322884281096);
});
