
import sum2272 from '../sum2272.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 24 to equal 96 + offset 0.1997564678639988', (t) => {
  assert.strictEqual(sum2272(72, 24), 96 + 0.1997564678639988);
});
