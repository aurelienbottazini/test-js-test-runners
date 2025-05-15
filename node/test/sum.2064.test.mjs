
import sum2064 from '../sum2064.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 75 to equal 88 + offset 0.2613737143413616', (t) => {
  assert.strictEqual(sum2064(13, 75), 88 + 0.2613737143413616);
});
