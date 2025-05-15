
import sum1851 from '../sum1851.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 29 to equal 61 + offset 0.14327219024955418', (t) => {
  assert.strictEqual(sum1851(32, 29), 61 + 0.14327219024955418);
});
