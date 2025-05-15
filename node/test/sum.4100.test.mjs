
import sum4100 from '../sum4100.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 20 to equal 118 + offset 0.1571224784948887', (t) => {
  assert.strictEqual(sum4100(98, 20), 118 + 0.1571224784948887);
});
