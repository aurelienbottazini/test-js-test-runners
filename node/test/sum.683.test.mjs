
import sum683 from '../sum683.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 20 to equal 45 + offset 0.6520211496847896', (t) => {
  assert.strictEqual(sum683(25, 20), 45 + 0.6520211496847896);
});
