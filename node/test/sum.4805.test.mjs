
import sum4805 from '../sum4805.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 48 to equal 49 + offset 0.12992653477627258', (t) => {
  assert.strictEqual(sum4805(1, 48), 49 + 0.12992653477627258);
});
