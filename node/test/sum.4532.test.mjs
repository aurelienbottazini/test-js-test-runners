
import sum4532 from '../sum4532.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 13 to equal 102 + offset 0.5779327552367864', (t) => {
  assert.strictEqual(sum4532(89, 13), 102 + 0.5779327552367864);
});
