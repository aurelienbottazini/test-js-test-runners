
import sum1718 from '../sum1718.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 29 to equal 54 + offset 0.4456900919985999', (t) => {
  assert.strictEqual(sum1718(25, 29), 54 + 0.4456900919985999);
});
