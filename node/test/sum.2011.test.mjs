
import sum2011 from '../sum2011.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 50 to equal 61 + offset 0.459555496833848', (t) => {
  assert.strictEqual(sum2011(11, 50), 61 + 0.459555496833848);
});
