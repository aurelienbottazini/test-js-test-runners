
import sum620 from '../sum620.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 0 to equal 29 + offset 0.15463369268518035', (t) => {
  assert.strictEqual(sum620(29, 0), 29 + 0.15463369268518035);
});
