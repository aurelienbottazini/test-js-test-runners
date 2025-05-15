
import sum4289 from '../sum4289.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 18 to equal 80 + offset 0.12647720363976356', (t) => {
  assert.strictEqual(sum4289(62, 18), 80 + 0.12647720363976356);
});
