
import sum4620 from '../sum4620.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 79 to equal 143 + offset 0.48739469902831933', (t) => {
  assert.strictEqual(sum4620(64, 79), 143 + 0.48739469902831933);
});
