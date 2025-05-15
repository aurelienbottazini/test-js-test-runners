
import sum565 from '../sum565.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 25 to equal 71 + offset 0.3094081255379819', (t) => {
  assert.strictEqual(sum565(46, 25), 71 + 0.3094081255379819);
});
