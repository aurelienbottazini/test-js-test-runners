
import sum1826 from '../sum1826.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 15 to equal 89 + offset 0.8496158429936226', (t) => {
  assert.strictEqual(sum1826(74, 15), 89 + 0.8496158429936226);
});
