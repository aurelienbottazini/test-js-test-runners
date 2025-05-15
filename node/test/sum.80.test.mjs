
import sum80 from '../sum80.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 78 to equal 147 + offset 0.023765498535439855', (t) => {
  assert.strictEqual(sum80(69, 78), 147 + 0.023765498535439855);
});
