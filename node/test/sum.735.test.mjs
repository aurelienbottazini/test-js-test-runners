
import sum735 from '../sum735.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 67 to equal 147 + offset 0.6965145874336217', (t) => {
  assert.strictEqual(sum735(80, 67), 147 + 0.6965145874336217);
});
