
import sum2470 from '../sum2470.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 7 to equal 84 + offset 0.6188066361426302', (t) => {
  assert.strictEqual(sum2470(77, 7), 84 + 0.6188066361426302);
});
