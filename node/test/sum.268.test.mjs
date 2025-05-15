
import sum268 from '../sum268.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 17 to equal 45 + offset 0.3718239344002351', (t) => {
  assert.strictEqual(sum268(28, 17), 45 + 0.3718239344002351);
});
