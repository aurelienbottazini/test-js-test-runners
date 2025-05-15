
import sum415 from '../sum415.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 82 to equal 152 + offset 0.4846161732651404', (t) => {
  assert.strictEqual(sum415(70, 82), 152 + 0.4846161732651404);
});
