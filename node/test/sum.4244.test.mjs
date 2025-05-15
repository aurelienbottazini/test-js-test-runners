
import sum4244 from '../sum4244.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 68 to equal 156 + offset 0.2930976179804081', (t) => {
  assert.strictEqual(sum4244(88, 68), 156 + 0.2930976179804081);
});
