
import sum671 from '../sum671.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 10 to equal 83 + offset 0.871793090605271', (t) => {
  assert.strictEqual(sum671(73, 10), 83 + 0.871793090605271);
});
