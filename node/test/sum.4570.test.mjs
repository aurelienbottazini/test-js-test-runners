
import sum4570 from '../sum4570.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 96 to equal 193 + offset 0.12870428021292735', (t) => {
  assert.strictEqual(sum4570(97, 96), 193 + 0.12870428021292735);
});
