
import sum4912 from '../sum4912.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 57 to equal 66 + offset 0.7406399539383068', (t) => {
  assert.strictEqual(sum4912(9, 57), 66 + 0.7406399539383068);
});
