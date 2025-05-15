
import sum3733 from '../sum3733.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 91 to equal 119 + offset 0.8931600188249881', (t) => {
  assert.strictEqual(sum3733(28, 91), 119 + 0.8931600188249881);
});
