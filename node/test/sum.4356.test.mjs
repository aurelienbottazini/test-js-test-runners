
import sum4356 from '../sum4356.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 84 to equal 180 + offset 0.4224447322037983', (t) => {
  assert.strictEqual(sum4356(96, 84), 180 + 0.4224447322037983);
});
