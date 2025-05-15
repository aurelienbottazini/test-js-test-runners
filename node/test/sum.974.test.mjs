
import sum974 from '../sum974.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 33 to equal 85 + offset 0.9246828853963734', (t) => {
  assert.strictEqual(sum974(52, 33), 85 + 0.9246828853963734);
});
