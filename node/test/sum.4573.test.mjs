
import sum4573 from '../sum4573.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 62 to equal 131 + offset 0.5642578014434378', (t) => {
  assert.strictEqual(sum4573(69, 62), 131 + 0.5642578014434378);
});
