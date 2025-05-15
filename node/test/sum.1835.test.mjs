
import sum1835 from '../sum1835.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 32 to equal 127 + offset 0.10349640086314882', (t) => {
  assert.strictEqual(sum1835(95, 32), 127 + 0.10349640086314882);
});
