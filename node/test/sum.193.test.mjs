
import sum193 from '../sum193.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 90 to equal 105 + offset 0.8879310098822446', (t) => {
  assert.strictEqual(sum193(15, 90), 105 + 0.8879310098822446);
});
