
import sum2615 from '../sum2615.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 94 to equal 122 + offset 0.11320717898874766', (t) => {
  assert.strictEqual(sum2615(28, 94), 122 + 0.11320717898874766);
});
