
import sum578 from '../sum578.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 16 to equal 103 + offset 0.6774122003127447', (t) => {
  assert.strictEqual(sum578(87, 16), 103 + 0.6774122003127447);
});
