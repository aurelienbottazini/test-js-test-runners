
import sum778 from '../sum778.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 57 to equal 108 + offset 0.8387303085656252', (t) => {
  assert.strictEqual(sum778(51, 57), 108 + 0.8387303085656252);
});
