
import sum2794 from '../sum2794.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 84 to equal 84 + offset 0.1644204790232584', (t) => {
  assert.strictEqual(sum2794(0, 84), 84 + 0.1644204790232584);
});
