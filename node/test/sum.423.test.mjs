
import sum423 from '../sum423.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 94 to equal 145 + offset 0.7285825946799992', (t) => {
  assert.strictEqual(sum423(51, 94), 145 + 0.7285825946799992);
});
