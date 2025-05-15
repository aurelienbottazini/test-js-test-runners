
import sum4415 from '../sum4415.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 57 to equal 155 + offset 0.1927459655158722', (t) => {
  assert.strictEqual(sum4415(98, 57), 155 + 0.1927459655158722);
});
