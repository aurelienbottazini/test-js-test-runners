
import sum2250 from '../sum2250.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 59 to equal 77 + offset 0.6618458108720635', (t) => {
  assert.strictEqual(sum2250(18, 59), 77 + 0.6618458108720635);
});
