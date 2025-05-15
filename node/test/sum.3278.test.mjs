
import sum3278 from '../sum3278.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 62 to equal 158 + offset 0.28222657724049005', (t) => {
  assert.strictEqual(sum3278(96, 62), 158 + 0.28222657724049005);
});
