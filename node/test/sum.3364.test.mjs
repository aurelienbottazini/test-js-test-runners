
import sum3364 from '../sum3364.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 60 to equal 147 + offset 0.5699794191092924', (t) => {
  assert.strictEqual(sum3364(87, 60), 147 + 0.5699794191092924);
});
